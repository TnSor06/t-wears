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

// For async fetching
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => {
    return shop.isFetching;
  }
);

// For each apparale men, women, jacket since we pass isLoading as false
// componentDidMount calls after first render so that it throws an error since data is not loaded
// and isloading is false as no function is fired. Thus we create a new selector
export const selectIsCollectionLoaded = createSelector([selectShop], (shop) => {
  // !! return boolean value
  return !!shop.collections;
});
