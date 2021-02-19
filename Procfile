release: python manage.py makemigrations
release: python manage.py migrate
web: gunicorn testdjreact.wsgi --log-file -
