import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageHitsAction } from '../../Store/Actions/pageHitsActions';
import SpinnerComponent from '../Spinner/SpinnerComponent';

const PageHitsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let ignore = false;
    dispatch(pageHitsAction());
    if (!ignore) return () => (ignore = true);
  }, [dispatch]);
  const pageHits = useSelector((state) => state.pageHits);
  const { loading, error, hits } = pageHits;
  return (
    <>
      {loading ? (
        <SpinnerComponent />
      ) : error ? (
        'There was an error loading the page hit counter'
      ) : (
        `${100 + hits?.length} unique hits.`
      )}
    </>
  );
};

export default PageHitsComponent;
