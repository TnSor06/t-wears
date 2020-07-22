import { connect } from "react-redux";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";

// For thunk
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import CollectionsOverview from "./collections-overview.component";

import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
