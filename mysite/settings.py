
# import django
# django.setup()
from pathlib import Path
import os
from datetime import timedelta
import config
# Build paths inside the project like this: BASE_DIR / 'subdir'.


#BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) #DIFFERENCE
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^w(3at+g%$ni6eyz%e!j!^$db+2a=m#sf+a58bm+lyiaf_j+1!'

# SECURITY WARNING: don't run with debug turned on in production!
#True
DEBUG = False

ALLOWED_HOSTS = ['speakup-heroku.herokuapp.com', '127.0.0.1']

AUTH_USER_MODEL = 'accounts.UserAccount'
# Application definition

INSTALLED_APPS = [
    'corsheaders',
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
    'Profile'
]

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
CHANNEL_LAYERS = {#DIFFERENCE
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('127.0.0.1', 6379)],
        },
    },
}

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'speakup',
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

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
# LOGIN_REDIRECT_URL = 'localhost:3000/'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'jeorgia.zr@gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_PASSWORD = 'oentswepntjbfmwn'
EMAIL_USE_TLS = True



REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    #     'rest_framework.permissions.IsAdminUser', 
    #     'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',  # for normal rest-frmaework,

    # ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication', #added for 401
        'rest_framework_simplejwt.authentication.JWTAuthentication', # comma is required
        'rest_framework.authentication.SessionAuthentication',
    ),
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


MEDIA_URL = '/images/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images')


#https://pypi.org/project/django-cors-headers/ <--- to work axios in localhost3000
CORS_ORIGIN_ALLOW_ALL = True