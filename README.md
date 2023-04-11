
# PadPet - Animal Virtual Adoption

PadPet (Front: React /// Django with Docker)

--------------------------
=======
Figma do projeto = https://www.figma.com/file/lUCRbCHje6S5ya9lJi7BPm/Padpet?node-id=0%3A1&t=CT8pJ0YEL5bue5nn-1

Modelagem da database = https://dbdiagram.io/home

--------------------------
Docker
Rodar o comando:
- docker-compose up --build

na mesma pasta rodar 
-> docker exec -i -t padpet_web_1 bash
-> python manage.py makemigrations
-> python manage.py migrate

OBS>>> Rodar npm install localmente para termos o node_modules baixado no sistema.

Ver a modelagem dos dados:

Figma do front:

API
ENDPOINTS:


Teste unitário:

-> docker exec -it padpet_web_1 bash
-> python manage.py test padpet
 



![image](https://user-images.githubusercontent.com/49574770/213442522-479a2aee-5c3f-4913-8004-ed9a5cd08350.png)
