import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => {
  return shop.collections;
});

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => {
    return collections
      ? Object.keys(collections).map((collectionKey) => {
          return collections[collectionKey];
        })
      : [];
  }
);

export const selectShopCollection = (collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  });
};
