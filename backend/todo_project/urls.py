from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),
    # Serve frontend index.html for all other routes
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Add catch-all pattern for client-side routing
urlpatterns += [
    path('<path:path>', TemplateView.as_view(template_name='index.html'), name='index'),
]