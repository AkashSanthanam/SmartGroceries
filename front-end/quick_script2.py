import os
import re

# Define the base directory where your project is located
base_dir = "C:/Users/akash/Documents/School/McMaster/Third Year/SideProjectCopies/SmartGroceries/front-end\src/app/shop"  # Replace with the actual path to your 'shop' folder

# The regex pattern to match the fetch request line that needs modification
fetch_pattern = r'fetch\("http://localhost:3000(.*?)\.json"\)'

# The baseUrl declaration line
base_url_declaration = 'const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";'

# Function to update the fetch line and insert baseUrl declaration
def update_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Check if baseUrl declaration is already present
    if base_url_declaration not in content:
        # Insert baseUrl declaration after the first import statement
        content = re.sub(r'(import .*?;)', r'\1\n\n' + base_url_declaration, content, 1)

    # Replace the fetch URL with the new format
    updated_content = re.sub(fetch_pattern, r'fetch(`${baseUrl}\1.json`)', content)

    # Check if there was any change, and write it back to the file
    if content != updated_content:
        with open(file_path, 'w') as file:
            file.write(updated_content)
        print(f"Updated: {file_path}")
    else:
        print(f"No changes made to: {file_path}")

# Function to traverse directories and find all page.js files
def modify_files_in_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == "page.js":
                file_path = os.path.join(root, file)
                update_file(file_path)

# Execute the script
if __name__ == "__main__":
    modify_files_in_directory(base_dir)