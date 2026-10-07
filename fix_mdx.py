import re
import base64

with open('content/blog/what-does-bitcoin-look-like-rust-type-system.mdx', 'r') as f:
    content = f.read()

def replace_box(match):
    title = match.group(1)
    inner_text = match.group(2).strip()
    
    # Remove the `{` and `}` if they are there from previous step
    if inner_text.startswith('{`'):
        inner_text = inner_text[2:]
    if inner_text.endswith('`}'):
        inner_text = inner_text[:-2]
        
    inner_text = inner_text.strip()
    encoded = base64.b64encode(inner_text.encode('utf-8')).decode('utf-8')
    return f'<DiagramBox title="{title}" base64Text="{encoded}" />'

new_content = re.sub(r'<DiagramBox title="([^"]+)">\s*(.*?)\s*</DiagramBox>', replace_box, content, flags=re.DOTALL)

with open('content/blog/what-does-bitcoin-look-like-rust-type-system.mdx', 'w') as f:
    f.write(new_content)

print("Done")
