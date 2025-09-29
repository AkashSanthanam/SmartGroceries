import os
import re

def add_columns_variable(file_path):
    """Add const columns = 6; to a JavaScript file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Find the import statements to insert after them
        import_pattern = r'^import\s+.*?from\s+["\'].*?["\'];?\s*$'
        imports = re.findall(import_pattern, content, re.MULTILINE)
        
        if imports:
            # Find the last import statement
            last_import = imports[-1]
            last_import_index = content.rfind(last_import)
            
            if last_import_index != -1:
                # Insert after the last import
                insertion_point = last_import_index + len(last_import)
                
                # Add the columns variable with proper spacing
                columns_declaration = "\n\nconst columns = 6;"
                
                new_content = (
                    content[:insertion_point] + 
                    columns_declaration + 
                    content[insertion_point:]
                )
                
                # Write the modified content back to the file
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                
                print(f"✓ Added columns variable to: {file_path}")
                return True
        
        print(f"⚠ No import statements found in: {file_path}")
        return False
        
    except Exception as e:
        print(f"✗ Error processing {file_path}: {str(e)}")
        return False

def process_shop_folder(shop_folder_path):
    """Recursively process all JS files in the shop folder and its subfolders."""
    if not os.path.exists(shop_folder_path):
        print(f"Error: Shop folder '{shop_folder_path}' does not exist.")
        return
    
    files_processed = 0
    files_modified = 0
    
    print(f"Processing files in: {shop_folder_path}\n")
    
    # Walk through all directories and subdirectories
    for root, dirs, files in os.walk(shop_folder_path):
        for file in files:
            # Check if it's a JavaScript file
            if file.endswith('.js') or file.endswith('.jsx'):
                file_path = os.path.join(root, file)
                files_processed += 1
                
                if add_columns_variable(file_path):
                    files_modified += 1
    
    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"Files processed: {files_processed}")
    print(f"Files modified: {files_modified}")
    print(f"{'='*60}")
    
if __name__ == "__main__":
    # Set the path to your shop folder
    shop_folder = "C:/Users/akash/Downloads/Documents/School/McMaster/Third Year/Side Projects/GroceryDelivery/SmartGroceries/front-end/src/app/shop"  # Change this to your actual shop folder path
    
    # You can also prompt for the path
    # shop_folder = input("Enter the path to your shop folder: ").strip()
    
    process_shop_folder(shop_folder)