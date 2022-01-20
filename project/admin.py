from django.contrib import admin
from .models import *
from django.utils.html import format_html
# Register your models here.
# admin.site.register(Pizza,PizzaAdmin)
# class AmountToppingInLine(admin.StackedInline):
#     model=ToppingAmount
#     extra=0
# class ComboAmountInLine(admin.StackedInline):
#     model=ComboAmount
#     extra = 1
class PizzaInComboAdmin(admin.StackedInline):
    model = PizzaInCombo
    extra = 1
class SideDishesInComboAdmin(admin.StackedInline):
    model = SideDishesInCombo
    extra = 1
class PizzaAdmin(admin.ModelAdmin):
    list_display=('name','cost')
    list_filter=['cost']
    search_fields=['name']
    fieldsets = (
        (None, {
            "fields": (
                ['name']
            ),
        }),
        # (None,{
        #     'fields':['size']
        # }),
        (None,{
            "fields":['cost']
        }),
        (None,{
            "fields":['costm']
        }),
        (None,{
            "fields":['costl']
        }),
        (None,{
            "fields":['image']
        }),
         (None,{
            "fields":['image_tag']
        }),
        (None,{
            "fields":['description']
        }
        ),
        (None,{
            'fields':['menu']
        }),
        # (None,{
        #     "fields":['image_tag']
        # }),
    )
    # fields = ['image_tag']
    readonly_fields = ['image_tag',]
    # inlines = [AmountToppingInLine]
    # exclude=('toppings',)
    def image_tag(self, obj):
        return format_html('<img src="{}" />'.format(obj.image.url))

    image_tag.short_description = 'Image'
class ComboAdmin(admin.ModelAdmin):
    list_display=('name','numberperson','time')
    list_filter=['numberperson']
    search_fields=['name']
    fieldsets = (
        # (None,{
        #     'fields':(
        #         ['combocategory']
        #     ),
        # }
        # ),
        (None, {
            "fields": (
                ['name']
            ),
        }),
        (None,{
            'fields':['percent']
        }),
        (None,{
            'fields':['time']
        }),
        (None,{
            'fields':['image']
        }),
        (None,{
            "fields":['image_tag']
        }),
        (None,{
            'fields':['numberperson']
        }),
        (None,{
            "fields":['description']
        }
        ),
         (None,{
            'fields':['menu']
        }),
        (None, {
            "fields": (
                ['pizzas']
            ),
        }),
        # (None, {
        #     "fields": (
        #         ['sides']
        #     ),
        # }),
    )
    inlines=[PizzaInComboAdmin,SideDishesInComboAdmin]
    readonly_fields = ['image_tag']
    def image_tag(self, obj):
        return format_html('<img src="{}" />'.format(obj.image.url))

    image_tag.short_description = 'Image'
    # exclude=['pizzas','dishes',]
class ToppingAdmin(admin.ModelAdmin):
    list_display=('name','cost')
    list_filter=['cost']
    search_fields=['name']
class SideDishesAdmin(admin.ModelAdmin):
    list_display=('name','cost')
    list_filter=['cost']
    search_fields=['name']
    fieldsets = (
        (None, {
            "fields": (
                ['name']
            ),
        }),
        (None,{
            "fields":['cost']
        }),
         (None,{
            'fields':['image']
        }),
        (None,{
            "fields":['image_tag']
        }),
        (None,{
            'fields':['menu']
        }),
        (None, {
            "fields": (
                ['type']
            ),
        }),
     )
    readonly_fields = ['image_tag']
    def image_tag(self, obj):
        return format_html('<img src="{}" />'.format(obj.image.url))

    image_tag.short_description = 'Image'
# class ComboAmountAdmin(admin.ModelAdmin):
#     list_filter=['combo']
#     list_display=('combo','pizza','size','amountPizza','dishes','amount')
# class ToppingAmountAdmin(admin.ModelAdmin):
#     list_filter=['pizza']
#     list_display=('pizza','topping','amount')
    
# admin.site.register(Topping,ToppingAdmin)
admin.site.register(SideDishes,SideDishesAdmin)
admin.site.register(Pizza,PizzaAdmin)
admin.site.register(Combo,ComboAdmin)
# admin.site.register(ToppingAmount, ToppingAmountAdmin)
# admin.site.register(ComboAmount,ComboAmountAdmin)
# admin.site.register(ComboCategory)
