import { connect } from "react-redux";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

// For thunk
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

import { compose } from "redux";
import CollectionsPage from "./collections.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

export const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);
