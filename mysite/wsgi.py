
import os
from whitenoise import WhiteNoise

from my_project import MyWSGIApp
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')


application = MyWSGIApp()
application = WhiteNoise(application, root='static/images')



# application = get_wsgi_application()
