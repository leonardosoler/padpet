from django.test import TestCase
from pet.models import Pet, Specie, Race

class PetModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        specie = Specie.objects.create(name='Dog')
        race = Race.objects.create(name='Golden Retriever', specie=specie)
        Pet.objects.create(name='Rex', age=3, specie=specie, race=race)

    def test_name_label(self):
        pet = Pet.objects.get(id=1)
        field_label = pet._meta.get_field('name').verbose_name
        self.assertEquals(field_label, 'name')

    def test_age_label(self):
        pet = Pet.objects.get(id=1)
        field_label = pet._meta.get_field('age').verbose_name
        self.assertEquals(field_label, 'age')

    def test_specie_label(self):
        pet = Pet.objects.get(id=1)
        field_label = pet._meta.get_field('specie').verbose_name
        self.assertEquals(field_label, 'specie')

    def test_race_label(self):
        pet = Pet.objects.get(id=1)
        field_label = pet._meta.get_field('race').verbose_name
        self.assertEquals(field_label, 'race')

    def test_name_max_length(self):
        pet = Pet.objects.get(id=1)
        max_length = pet._meta.get_field('name').max_length
        self.assertEquals(max_length, 255)

    def test_age_max_length(self):
        pet = Pet.objects.get(id=1)
        max_length = pet._meta.get_field('age').max_length
        self.assertEquals(max_length, 255)

    def test_object_name_is_name(self):
        pet = Pet.objects.get(id=1)
        expected_object_name = pet.name
        self.assertEquals(expected_object_name, str(pet))
