import { axiosBase } from '@api';
import { CustomerProps } from '@store';

import { NutritionData, NutritionProduct, TExercises, TPlanType } from '~types';

export const createCustomer = (values: Partial<CustomerProps>) =>
  axiosBase.post('/customers', values);

export const getCustomers = () => axiosBase.get('/customers');

export const createPlan = (id: string, values: any) =>
  axiosBase.post(`/customers/${id}/training_plans`, values);

export const getExercises = () => axiosBase.get<TExercises[]>('/exercises');

export const getCustomerPlan = (id: string) =>
  axiosBase.get<TPlanType[]>(`/customers/${id}/training_plans`);

export const getCustomerPlanDetail = (id: string, planId: string) =>
  axiosBase.get<TPlanType>(`/customers/${id}/training_plans/${planId}`);
export const getFoodDetails = async (date: string) => {
  const data = await axiosBase.get<NutritionData>(`/nutrition/diets/${date}`);
  return data.data;

  return {
    date: '12-08-2024',
    actual_nutrition: {
      daily_total: {
        calories_total: 2800,
        calories_consumed: 2800,
        proteins_total: 200,
        fats_total: 100,
        carbs_total: 300,
        proteins_consumed: 200,
        fats_consumed: 100,
        carbs_consumed: 300,
      },
      breakfast: {
        calories_total: 800,
        calories_consumed: 800,
        proteins_total: 50,
        fats_total: 30,
        carbs_total: 100,
        proteins_consumed: 50,
        fats_consumed: 30,
        carbs_consumed: 100,
        products: [
          {
            id: 'a3bb189e-8bf9-3888-9912-ace4e6543002',
            name: 'Oatmeal',
            amount: 100,
            type: 'gram',
            proteins: 10,
            fats: 5,
            carbs: 30,
            calories: 200,
            vendor: 'Quaker',
          },
          {
            id: 'b1dbd071-071d-4ce9-8168-3919c73ec4fd',
            name: 'Milk %5 Parmalat',
            amount: 300,
            type: 'milliliter',
            proteins: 6,
            fats: 15,
            carbs: 3,
            calories: 634,
            vendor: 'Chobani',
          },
          {
            id: 'd9428888-122b-11e1-b85c-61cd3cbb3210',
            name: 'Greek Yogurt',
            amount: 150,
            type: 'gram',
            proteins: 15,
            fats: 7,
            carbs: 10,
            calories: 150,
            vendor: 'Chobani',
          },
          {
            id: 'e4d909c2-9a0b-4c3b-b7db-3c5a81e5f456',
            name: 'Banana',
            amount: 100,
            type: 'gram',
            proteins: 1,
            fats: 0.3,
            carbs: 22.8,
            calories: 89,
            vendor: 'Dole',
          },
        ],
      },
      lunch: {
        calories_total: 1000,
        calories_consumed: 1000,
        proteins_total: 75,
        fats_total: 35,
        carbs_total: 120,
        proteins_consumed: 75,
        fats_consumed: 35,
        carbs_consumed: 120,
        products: [
          {
            id: '067e6162-3b6f-4ae2-a171-2470b63dff00',
            name: 'Grilled Chicken Breast',
            amount: 200,
            type: 'gram',
            proteins: 60,
            fats: 10,
            carbs: 0,
            calories: 400,
            vendor: 'Tyson',
          },
          {
            id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
            name: 'Quinoa',
            amount: 150,
            type: 'gram',
            proteins: 12,
            fats: 9,
            carbs: 53,
            calories: 222,
            vendor: "Bob's Red Mill",
          },
          {
            id: '7d44b720-23f7-48f0-88a1-8e78c080a974',
            name: 'Mixed Vegetables',
            amount: 200,
            type: 'gram',
            proteins: 3,
            fats: 5,
            carbs: 30,
            calories: 150,
            vendor: 'Birds Eye',
          },
        ],
      },
      dinner: {
        calories_total: 600,
        calories_consumed: 600,
        proteins_total: 45,
        fats_total: 25,
        carbs_total: 30,
        proteins_consumed: 45,
        fats_consumed: 25,
        carbs_consumed: 30,
        products: [
          {
            id: '550e8400-e29b-41d4-a716-446655440000',
            name: 'Salmon',
            amount: 150,
            type: 'gram',
            proteins: 34,
            fats: 21,
            carbs: 0,
            calories: 350,
            vendor: 'Norwegian Seafoods',
          },
          {
            id: '123e4567-e89b-12d3-a456-426614174000',
            name: 'Brown Rice',
            amount: 150,
            type: 'gram',
            proteins: 5,
            fats: 2,
            carbs: 45,
            calories: 150,
            vendor: 'Lundberg',
          },
          {
            id: 'e3a1c4e4-02f4-4a0a-80bd-89f90fef4c14',
            name: 'Steamed Broccoli',
            amount: 100,
            type: 'gram',
            proteins: 3,
            fats: 0.4,
            carbs: 7,
            calories: 35,
            vendor: 'Green Giant',
          },
        ],
      },
      snacks: {
        calories_total: 400,
        calories_consumed: 400,
        proteins_total: 30,
        fats_total: 10,
        carbs_total: 50,
        proteins_consumed: 30,
        fats_consumed: 10,
        carbs_consumed: 50,
        products: [
          {
            id: 'f9bc37c6-cfd8-4f59-a8e6-6a6b37b8c2c2',
            name: 'Protein Bar',
            amount: 1,
            type: 'portion',
            proteins: 20,
            fats: 5,
            carbs: 30,
            calories: 200,
            vendor: 'Clif Bar',
          },
          {
            id: '936da01f-9abd-4d9d-80c7-02af85c822a8',
            name: 'Apple',
            amount: 100,
            type: 'gram',
            proteins: 0,
            fats: 0,
            carbs: 25,
            calories: 52,
            vendor: 'Fuji',
          },
          {
            id: '8e02b2c3-16e1-4a3d-8a57-6a1f889c8af2',
            name: 'Almonds',
            amount: 30,
            type: 'gram',
            proteins: 6,
            fats: 14,
            carbs: 6,
            calories: 166,
            vendor: 'Blue Diamond',
          },
        ],
      },
    },
  };
};
export const getNutritionProduct = async (id: string) => {
  const data = await axiosBase.get<NutritionProduct>(
    `nutrition/products/${id}`,
  );
  return data?.data;
};
export const setProductFood = async (values: any) => {
  const response = await axiosBase.post('/nutrition/diets', values);
  return response.data;
};
export const getProductList = async () => {
  const response = await axiosBase.get<NutritionProduct[]>(
    '/nutrition/products/history/all',
  );
  return response.data;
};
export const searchProduct = async (input: string) => {
  const response = await axiosBase.get<NutritionProduct[]>(
    `/nutrition/products/lookup/${input}`,
  );
  return response.data;
};
