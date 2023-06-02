<template>
  <div class="container">
    <div class="bg-gray-50 w-full xl:w-10/12 mx-auto rounded-sm p-3">
      <div class="relative border-t border-b border-gray">
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Резервирана дата
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="flex items-center justify-between font-roboto">
              <InputField class="w-1/2" />
              <SelectField class="w-1/2" />
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Име на резервиращо лице
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <input
                type="text"
                class="form-input w-full px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              />
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Дата на раждане
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto flex items-center justify-between">
              <select
                name="DateOfBirthDay"
                class="form-select md- w-1/3 px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              >
                <option v-for="DAY in DAYS" :value="DAY" :key="DAY">
                  {{ DAY }}
                </option>
              </select>
              <select
                name="DateOfBirthMonth"
                class="form-select ml-2 w-1/3 px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              >
                <option v-for="(MONTH, i) in MONTHS" :key="i" :value="MONTH.id">
                  {{ MONTH.name }}
                </option>
              </select>
              <select
                name="DateOfBirthYear"
                class="form-select ml-2 w-1/3 px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              >
                <option value="0">Година</option>
                <option v-for="(YEAR, i) in YEAR_RANGE" :key="i" :value="YEAR">
                  {{ YEAR }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left md:text-right font-roboto">
              Номер на паспорт
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <input
                type="text"
                class="form-input w-full px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              />
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left md:text-right font-roboto">
              Изображение на паспорт
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <FileField />
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Емайл адрес
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <input
                type="text"
                class="form-input w-full px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              />
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Гражданство
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <select
                class="form-select w-full px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              >
                <option v-for="(CITI, i) in CITIZEN" :key="i" :value="CITI.id">
                  {{ CITI.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3">
            <div class="text-left mb-1 md:mb-0 md:text-right font-roboto">
              Основание
            </div>
          </div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto">
              <select
                class="form-select w-full px-2 py-2 rounded-md border border-gray-300 hover:border-gray-500 focus:border-gray-500"
              >
                <option value="0"></option>
                <option value="1">Приемане на обща натурализация</option>
                <option value="2">
                  Приемане на лица от български произход
                </option>
                <option value="3">
                  Освобождаване от българско гражданство
                </option>
                <option value="4">
                  Възстановяване на българско гражданство
                </option>
              </select>
            </div>
          </div>
        </div>

        <div
          class="my-3 py-3 border-t border-b border-gray flex md:space-x-8 items-start"
        >
          <div class="mr-3 md:w-1/2 md:order-1">
            <div class="font-roboto">
              <ChekboxField />
              <!-- <input type="checkbox" class="rounded text-gray" /> -->
            </div>
          </div>
          <div class="w-4/4 md:mr-3 md:w-1/3 md:order-0">
            <div
              class="text-left mb-1 md:mr-8 md:mb-0 md:text-right font-roboto"
            >
              Постоянно пребиваващ в Република България
            </div>
          </div>
        </div>

        <div class="block my-3 md:flex md:space-x-8 md:items-center">
          <div class="space-x-4 w-full md:w-1/3"></div>
          <div class="md:space-x-4 w-full md:w-1/2">
            <div class="font-roboto text-gray-500">[Captcha Here]</div>
          </div>
        </div>

        <div
          class="my-3 py-3 border-t border-b border-gray flex md:space-x-8 items-start"
        >
          <div class="mr-3 md:w-1/2 md:order-1">
            <div class="font-roboto">
              <input type="checkbox" class="rounded text-gray" />
            </div>
          </div>
          <div class="w-4/4 md:mr-3 md:w-1/3 md:order-0">
            <div
              class="text-left mb-1 md:mr-8 md:mb-0 md:text-right font-roboto"
            >
              Резервирай дата и час за подаване на документи и провеждане на
              интервю за непълнолетни членове на семейството
            </div>
          </div>
        </div>

        <div class="block my-3 py-3 md:flex md:space-x-8 items-start">
          <div class="space-x-4 w-full md:w-1/3"></div>
          <div class="space-x-4 w-full md:w-1/2">
            <!-- <button
              type="button"
              class="font-roboto font-semibold rounded-md text-green-600 border border-green-600 px-4 py-2"
            >
              Начало
            </button> -->
            <ButtonGreen />
            <button
              type="button"
              class="font-roboto font-semibold rounded-md text-green-600 border border-green-600 px-4 py-2"
            >
              Резервирай
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/atoms/input.vue";
import SelectField from "@/components/atoms/select.vue";
import FileField from "@/components/atoms/fileInput.vue";
import ChekboxField from "@/components/atoms/checkbox.vue";
import ButtonGreen from "@/components/atoms/button.vue";
import { CITIZEN } from "@/data/citizenship";
import { MONTHS } from "@/data/months";
export default {
  name: "form-view",
  components: {
    InputField,
    SelectField,
    FileField,
    ChekboxField,
    ButtonGreen,
  },
  props: {},
  setup() {
    const year = new Date().getFullYear();
    const YEAR_RANGE = Array.from(
      { length: year - 1912 },
      (value, index) => 1913 + index
    );

    const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

    return {
      CITIZEN,
      YEAR_RANGE,
      MONTHS,
      DAYS,
    };
  },
};
</script>
