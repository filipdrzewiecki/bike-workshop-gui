import '../../Css/index.css';
import * as partTypes from './PART_TYPES.jsx';


    function renderFrameParams(params, filters) {
        if (filters.brand) {
            params.append('brand', filters.brand);
        }
        if (filters.model) {
            params.append('model', filters.model);
        }
        if (filters.year) {
            params.append('year', filters.year);
        }
        return params;
    }

    export function renderParams(type, filters) {
        var params = new URLSearchParams();
        if (filters.currentPage) {
            params.append('page', filters.currentPage);
        }
        switch (type) {
          case partTypes.FRAME:
              return renderFrameParams(params, filters);
          default:
              return new URLSearchParams();
      }
    }



