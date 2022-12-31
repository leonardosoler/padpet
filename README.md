# imgapi
API de cadastro e analise de imagem (Django/Docker)

Rodar o 
docker-compose up --build

na mesma pasta rodar 
-> docker exec -i -t imgapi_web_1 bash
-> python manage.py makemigrations
-> python manage.py migrate



ENDPOINTS:

==============
CRUD Imagem
==============
http://localhost:8000/imagem/

Parametros para POST:
- nome_imagem
- tipo_imagem

GET:
- id_imagem ou sem nenhum id traz todos os registros.

===============
CRUD Analise
===============
http://localhost:8000/analise/


OBs:. Quando salva, retorna todas as analises da imagem utilizada + o POST atual.
Parametro para POST:
- analise
- id_imagem
- tipo_analise
- status 

GET:
- id_analise ou sem id traz todos os registros

===============
Lista todas as analises relacionadas a uma imagem especifica.
===============

http://localhost:8000/imagem-analise/

*Informar o id_imagem 


================
Mudar status de todas as analises referentes a uma imagem ou mudar status de uma analise.
================
http://localhost:8000/status-analise/

Informar o id_imagem ou o id_analise

===============
EXTRA:
===============

http://localhost:8000/analise-imagem/
Lista todas as analises em ordem de id das imagens.


Teste unitário:

-> docker exec -i -t imgapi_web_1 bash
-> python manage.py test imagem 
 



