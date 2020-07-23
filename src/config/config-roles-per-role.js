import { veterinarianRoutes } from '../routes';
import { petOwnerRoutes } from '../routes';

export const roleRoutes = {
	veterinarian: veterinarianRoutes,
	pet_owner: petOwnerRoutes,
};
