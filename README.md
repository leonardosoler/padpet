# PadPet - Animal Virtual Adoption
 
PadPet (Front: React /// Django with Docker)

Rodar o 
docker-compose up --build

na mesma pasta rodar 
-> docker exec -i -t imgapi_web_1 bash
-> python manage.py makemigrations
-> python manage.py migrate

OBS>>> Rodar npm install localmente para termos o node_modules baixado no sistema.


API
ENDPOINTS:


Teste unitário:

-> docker exec -it padpet_web_1 bash
-> python manage.py test padped
 



