export enum HomeReducerActionType {
  CHANGE_TITLE = "CHANGE_TITLE",
  CHANGE_IS_PRIMARY = "CHANGE_IS_PRIMARY",
}

export interface IHomeContextState {
  title: string;
  isPrimary: boolean;
}

interface IHomeReducerAction {
  type: string;
  payload: Pick<IHomeContextState, "title" | "isPrimary">;
}

export const homeReducer = (state: IHomeContextState, { type, payload }: IHomeReducerAction) => {
  switch (type) {
    case HomeReducerActionType.CHANGE_TITLE:
      return {
        ...state,
        title: payload.title,
      };

    case HomeReducerActionType.CHANGE_IS_PRIMARY:
      return {
        ...state,
        isPrimary: payload.isPrimary,
      };

    default:
      return state;
  }
};
