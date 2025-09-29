import os
import re

# Directories for JSON files and the app folder
json_folder = 'C:/Users/akash/Documents/School/McMaster/Third Year/Side Projects/GroceryDelivery/SmartGroceries/front-end/public/data/diary/butter'
directory = 'C:/Users/akash/Documents/School/McMaster/Third Year/Side Projects/GroceryDelivery/SmartGroceries/front-end/src/app/shop'

# Define the text patterns to search and replace
old_text = r'process.env.NEXT_PUBLIC_BASE_URL \|\| ""'
new_text = 'process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"'

# Traverse the directory and update files
for root, _, files in os.walk(directory):
    for file_name in files:
        if file_name.endswith('.js'):
            file_path = os.path.join(root, file_name)
            with open(file_path, 'r') as file:
                content = file.read()
            
            # Replace the old text with the new text
            updated_content = re.sub(old_text, new_text, content)
            
            # Write the updated content back to the file if changes were made
            if content != updated_content:
                with open(file_path, 'w') as file:
                    file.write(updated_content)
                print(f"Updated: {file_path}")


# # Create folders and generate page.js for each JSON file
# for filename in os.listdir(json_folder):
#     if filename.endswith('.json'):
#         # Extract fruit name without extension
#         veggie_name = os.path.splitext(filename)[0]

#         # Create the corresponding folder in app/shop/fruit
#         veggie_folder_path = os.path.join(app_folder, veggie_name)
#         os.makedirs(veggie_folder_path, exist_ok=True)

#         # Define the content for the page.js file
#         js_content = f'''
# import React from "react";

# import ProductCard from "@/components/ProductCard";

# export default async function Page() {{
#   const res = await fetch("http://localhost:3000/data/diary/butter/{filename}");
#   const data = await res.json();
#   const columns = 6;
#   return (
#     <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
#       {{data.map((item, index) => (
#         <ProductCard key={{index}} item={{item}} index={{index}} columns={{columns}} />
#       ))}}
#     </div>
#   );
# }}
# '''

#         # Write the content to page.js in the corresponding folder
#         with open(os.path.join(veggie_folder_path, 'page.js'), 'w') as js_file:
#             js_file.write(js_content)

# print("Folders and page.js files created successfully.")
