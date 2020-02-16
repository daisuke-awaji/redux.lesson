export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface ICountReducerAction {
  type: typeof INCREMENT | typeof DECREMENT;
}
