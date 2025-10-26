import {Hotel} from './hotel';

export interface AppState {
  hotels: Hotel[] | null;
  loading: boolean;
  error: any | null;
}
