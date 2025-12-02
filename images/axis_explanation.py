import numpy as np

# Create a sample 2D array (like your filedata)
data = np.array([
    [1, 15, 8,  12],  # Row 0
    [20, 5,  25, 3],  # Row 1  
    [7,  30, 2,  18], # Row 2
    [9,  4,  35, 6]   # Row 3
])

print("Original array:")
print(data)
print("Shape:", data.shape)  # (4 rows, 4 columns)
print("\n" + "="*50)

# Step 1: Check which elements are > 10
print("Step 1: filedata > 10")
comparison = data > 10
print(comparison)
print("\n" + "="*50)

# Step 2: Apply np.any() with axis=0 (along rows)
print("Step 2: np.any(filedata > 10, axis=0)")
result_axis0 = np.any(data > 10, axis=0)
print("Result:", result_axis0)
print("Shape:", result_axis0.shape)

print("\nWhat axis=0 means:")
print("- Look at each COLUMN separately")
print("- For each column, check if ANY value in that column is > 10")
print("- Return True/False for each column")

print("\nColumn breakdown:")
for i in range(data.shape[1]):
    col_values = data[:, i]
    col_comparison = col_values > 10
    print(f"Column {i}: {col_values} > 10 = {col_comparison} → ANY = {np.any(col_comparison)}")

print("\n" + "="*50)

# Compare with axis=1 (along columns)
print("For comparison: np.any(filedata > 10, axis=1)")
result_axis1 = np.any(data > 10, axis=1)
print("Result:", result_axis1)
print("Shape:", result_axis1.shape)

print("\nWhat axis=1 means:")
print("- Look at each ROW separately") 
print("- For each row, check if ANY value in that row is > 10")
print("- Return True/False for each row")

print("\nRow breakdown:")
for i in range(data.shape[0]):
    row_values = data[i, :]
    row_comparison = row_values > 10
    print(f"Row {i}: {row_values} > 10 = {row_comparison} → ANY = {np.any(row_comparison)}") 