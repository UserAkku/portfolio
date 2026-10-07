import re

path = '/Users/Akhilesh/ak-projects/portfolio-ak/portfolio/content/blog/what-does-bitcoin-look-like-rust-type-system.mdx'
with open(path, 'r') as f:
    content = f.read()

def replacer(match):
    title = match.group(1)
    text = match.group(2)
    # escape < and >
    text = text.replace('<', '&lt;').replace('>', '&gt;')
    return f'<DiagramBox title="{title}">\n{text}\n</DiagramBox>'

# Find <DiagramBox title="..." text={`...`} />
content = re.sub(r'<DiagramBox\s+title="([^"]+)"\s+text=\{`([^`]+)`\}\s*/>', replacer, content)

with open(path, 'w') as f:
    f.write(content)

print("Replaced!")
