import os
import glob
import re

def check_abrupt_ending(file_path):
    """Checks if a file ends abruptly, which is a strong sign of truncation."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            if not content:
                return False
            
            content = content.strip()
            if not content:
                return False
                
            # Common endings for complete documents: punctuation or closing markdown
            # Added Chinese punctuation as well based on file names
            valid_endings = ('.', '!', '?', '"', "'", '```', '>', '*', '_', '#', '】', '。', '！', '？', '”', '’')
            
            abrupt = False
            if not content.endswith(valid_endings):
                abrupt = True
                
            # Check for unclosed code blocks
            code_block_markers = len(re.findall(r'^```', content, flags=re.MULTILINE))
            if code_block_markers % 2 != 0:
                abrupt = True
                
            return abrupt
                
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    return False

def find_potential_truncations(base_prediction_dir=".", size_threshold_kb=55.0):
    all_md_files = glob.glob(f"{base_prediction_dir}/**/*.md", recursive=True)
    
    print(f"Scanning {len(all_md_files)} documents in '{base_prediction_dir}'...\n")
    
    suspicious_files = []
    
    # 15k tokens limit. 1 token ≈ 4 characters. 
    # 15,000 tokens ≈ 60,000 characters ≈ 58.6 KB.
    # We will flag files > 55 KB as near the size limit, 
    # and also check for abrupt endings regardless of size.
    
    for file_path in all_md_files:
        size_kb = os.path.getsize(file_path) / 1024
        
        is_near_limit = size_kb > size_threshold_kb
        has_abrupt_ending = check_abrupt_ending(file_path)
        
        if is_near_limit or has_abrupt_ending:
            suspicious_files.append({
                'path': file_path, 
                'size': size_kb, 
                'near_limit': is_near_limit, 
                'abrupt_ending': has_abrupt_ending
            })
            
    if not suspicious_files:
        print("No potentially truncated files found. All files seem complete.")
    else:
        print(f"Found {len(suspicious_files)} potentially truncated files:")
        # Sort by largest first
        suspicious_files.sort(key=lambda x: x['size'], reverse=True)
        for info in suspicious_files:
            reasons = []
            if info['near_limit']:
                reasons.append("Near 15k token limit")
            if info['abrupt_ending']:
                reasons.append("Abrupt ending detected")
            
            reason_str = ", ".join(reasons)
            print(f"- {os.path.basename(info['path'])} ({info['size']:.1f} KB) -> [{reason_str}]")

if __name__ == "__main__":
    find_potential_truncations()
