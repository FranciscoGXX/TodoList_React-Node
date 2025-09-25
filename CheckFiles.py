import os;


document_Path= os.path.expanduser("~/Documentos")

def CheckFiles(Path, nivel=0):
    for File in os.listdir(Path):
        complete_Path=os.path.join(Path,File)
        
    
        print("  "*nivel+"-  "+File)
        
        if(os.path.isdir(complete_Path)):
            CheckFiles(complete_Path,nivel+1)


import os
import random

def guardar_archivo(text_content, file_path):
    with open(file_path, 'w') as file:
        # Write the text content to the file
        file.write(text_content)


if os.path.exists("Carpeta_principal"):
    os.system(f'rm -r "Carpeta_principal"')


        

print("  ") #Salto de linea
CheckFiles("./")


