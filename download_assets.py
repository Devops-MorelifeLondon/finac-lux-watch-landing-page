import re
import urllib.request
import os

with open('luxury_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all image URLs, png, webp, svg, jpg
urls = set(re.findall(r'src=[\'"]([^\'"]+)[\'"]', html) + re.findall(r'url=([^\&\s\'"]+)', html))
print("Image URLs found:", urls)

# Download logo files to public
for u in ['/finacforce-official-logo.png', '/finacforce-official-whitelogo.png', '/favicon.ico']:
    full_url = 'https://luxury.finacforce.com' + u
    target_path = os.path.join('public', os.path.basename(u))
    try:
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req).read()
        with open(target_path, 'wb') as f:
            f.write(data)
        print(f"Downloaded {u} -> {target_path} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error downloading {u}: {e}")

