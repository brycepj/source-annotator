import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RepoView from '../components/RepoView/RepoView';
import * as HomeActions from '../actions/home';

function mapStateToProps(state) {
  return {
    repo: { 
      name: "my name",
      fileTree: {
        rootDir: {
          children: [{ filename: 'myjsfile.ks', filename2: 'myfilename2'} ],
        }
      },
   },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoView);
