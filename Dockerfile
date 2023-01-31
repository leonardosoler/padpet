FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /padpet_back
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .


