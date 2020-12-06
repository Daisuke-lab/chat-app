web: gunicorn mysite.wsgi --log-file -
worker: celery worker -A mysite.celery -l INFO