
# import django
# django.setup()
from pathlib import Path
import os
from datetime import timedelta
import config
# Build paths inside the project like this: BASE_DIR / 'subdir'.
host = 'speakup-heroku.herokuapp.com'
deploy = True

#BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) #DIFFERENCE
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^w(3at+g%$ni6eyz%e!j!^$db+2a=m#sf+a58bm+lyiaf_j+1!'

# SECURITY WARNING: don't run with debug turned on in production!
#True
DEBUG = True
#if you define the host speakup-heroku.herokuapp.com, it allows only https
ALLOWED_HOSTS = [
    # 'speakup-heroku.herokuapp.com',
    # '127.0.0.1',
    # 'localhost'
    ]

AUTH_USER_MODEL = 'accounts.UserAccount'
# Application definition

INSTALLED_APPS = [
    'corsheaders',
    'whitenoise.runserver_nostatic', #added 
    'channels',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'rest_framework',
    'rest_framework.authtoken', #added
    'accounts',
    'chats',
    'djoser',
    'Profile',
    'django_filters',
    's3direct',
    'storages',
    #'django_file_download',
    # 'easy_thumbnails',  => crop
    # 'image_cropping',
]

# from easy_thumbnails.conf import Settings as thumbnail_settings
# THUMBNAIL_PROCESSORS = (
#     'image_cropping.thumbnail_processors.crop_corners',  => crop
# ) + thumbnail_settings.THUMBNAIL_PROCESSORS


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mysite.urls'

#os.path.join(BASE_DIR, 'chat/templates')
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mysite.wsgi.application'
ASGI_APPLICATION = 'mysite.routing.application'#DIFFERENCE

# "hosts": [('127.0.0.1', 6379)],
#speakup-heroku.herokuapp.com
CHANNEL_LAYERS = {#DIFFERENCE
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [os.environ.get('REDIS_URL', 'redis://localhost:6379')],
        },
    },
}



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'chatapp',
        'USER': 'postgres',
        'PASSWORD': '3153Zr0314',
        'HOST': 'localhost'
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/




EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'speakup.team.zr@gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_PASSWORD = 'czogwqexzzlrmjia'
#oentswepntjbfmwn
EMAIL_USE_TLS = True

CELERY_BROKER_URL = 'redis://:p0a016fab70bed90166f9ab834e8cbd2f719d85bc1b6bec06eeecc4dbe7f637fd@ec2-54-197-63-194.compute-1.amazonaws.com:10169'

REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    #     'rest_framework.permissions.IsAdminUser', 
    #     'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',  # for normal rest-frmaework,

    # ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication', #added for 401
        'rest_framework_simplejwt.authentication.JWTAuthentication', # comma is required
        # 'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}

SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('JWT',),
   'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}

DJOSER = {
    'LOGIN_FIELD': 'email', # here is the same as USERNAME_FIELD in model
    'USER_CREATE_PASSWORD_RETYPE':True,
    'SEND_CONFIRMATION_EMAIL': True,
    #'USERNAME_CHANGED_EMAIL_CONFIRMATION':True,
    'SET_PASSWORD_RETYPE': True,
    'SET_USERNAME_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
    'USER_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': 'activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'SERIALIZERS': {
        'user_create': 'accounts.serializers.UserCreateSerializer',
        'user': 'accounts.serializers.UserCreateSerializer',
        'user_delete': 'djoser.delete.UserDeleteSerializer',

    }

}

SITE_ID = 5
#CORS_ORIGIN_ALLOW_ALL = True # added XHTMLrequest cors





CORS_ORIGIN_ALLOW_ALL = True



CACHES = {
    "default": {
         "BACKEND": "redis_cache.RedisCache",
         "LOCATION": os.environ.get('REDIS_URL'),
    }
}
BROKER_URL = os.environ.get("REDIS_URL")

# CELERY_RESULT_BACKEND = os.environ.get("REDIS_URL")

# CELERY_TASK_SERIALIZER = 'json'
# CELERY_RESULT_SERIALIZER = 'json'
# CELERY_ACCEPT_CONTENT = ['json']


import django_heroku
django_heroku.settings(locals())

#/static/
STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static'),
    os.path.join(BASE_DIR, 'static')
]
#static => staticfiles
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfile')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

#/images/
MEDIA_URL = '/images/'

#static/images
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images')
# MEDIA_ROOT = 'speakup-heroku.herokuapp.com/static/images'

#AKIAI4773JDWNNW6YPTQ
AWS_ACCESS_KEY_ID = 'AKIAZSSQTD2BHK4DURTE'
if deploy:
    AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
else:
    AWS_SECRET_ACCESS_KEY = env.str('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = 'speakup-image-storage'
AWS_S3_REGION_NAME = 'us-east-2'
AWS_S3_ENDPOINT_URL =  'https://s3.us-east-2.amazonaws.com'
AWS_DEFAULT_ACL = None

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


# It is for displaying other files besides image
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1554707441515",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::　/*"
        }
    ]
}