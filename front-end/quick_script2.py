import os
import re

# Define the base directory where your project is located
base_dir = "C:/Users/akash/Documents/School/McMaster/Third Year/SideProjectCopies/SmartGroceries/front-end\src/app/shop"  # Replace with the actual path to your 'shop' folder

# The old baseUrl declaration that needs to be replaced
old_base_url_declaration = 'const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "";'
# The new baseUrl declaration
new_base_url_declaration = 'const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "";'


# Function to update the baseUrl declaration
def update_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Replace the old baseUrl declaration with the new one
    updated_content = content.replace(old_base_url_declaration, new_base_url_declaration)

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