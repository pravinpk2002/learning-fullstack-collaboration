# Importing a Database from a `.sql` File

## 1. Using XAMPP (phpMyAdmin)

1. **Open phpMyAdmin**  
   - Start XAMPP and ensure Apache and MySQL services are running.  
   - Open a browser and go to `http://localhost/phpmyadmin`.


2. **Create or Select a Database**  
   - If the database does not exist, create one:  
     - Click **"Databases"**, enter a name, and click **"Create"**.  
   - If it already exists, select it from the left panel.


3. **Import the `.sql` File**  
   - Go to the **"Import"** tab in the top menu.  
   - Click **"Choose File"**, select your `.sql` file, and ensure the format is set to "SQL".  
   - Click **"Go"**.  
   - phpMyAdmin will execute the script, and the database will be imported.

---

## 2. Using MySQL Workbench

1. **Open MySQL Workbench**  
   - Launch Workbench and connect to your MySQL server by double-clicking your connection.

2. **Create a Database**  
   - If the database does not exist:  
     - Go to **"Schemas"**, right-click, and choose **"Create Schema"**.  
     - Enter a name and click **"Apply"**.

3. **Import the `.sql` File**  
   - Navigate to **File > Open SQL Script** or press `Ctrl + O`.  
   - Locate and open your `.sql` file.  
   - The SQL script will load into a query editor.

4. **Execute the Script**  
   - Select the target database from the dropdown in the toolbar (top-left).  
   - Click the **"Execute"** button (lightning icon) to run the script.  
   - Your database should now be imported.
