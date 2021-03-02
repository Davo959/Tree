/* Three view

  UI, I can create another dynamic component if have any time

 */

import React, {Component} from 'react';
import {TreeListData} from "../../configs/constants";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import {ButtonsComponent} from "../../components/Buttons";
import {filterData} from '../../configs/functions'

let data = TreeListData.data

class TreeGroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            filteredData: [],

        }
    }

    componentDidMount() {
        this.setState({filteredData: filterData(data, ['department_nm', 'group_nm', 'category_nm', 'sub_cat_nm'])})
    }

    render() {

        const {filteredData} = this.state

        return (
            <div>

                {/*buttons functional don't work*/}

                <ButtonsComponent/>

                {Object.entries(filteredData).map((department, i) => (
                    <TreeView
                        key={i}
                        defaultCollapseIcon={<ExpandMoreIcon/>}
                        defaultExpandIcon={<ChevronRightIcon/>}
                        multiSelect
                    >
                        <hr/>
                        <div key={i}>

                          <TreeItem nodeId={ i++ } label={ department[0] }>

                             {department[1] &&
                                Object.entries( department[1] ).map((group,j) => (

                                    <div  key={j} className={ 'BudgetedStyle' }>

                                        <TreeItem nodeId={i++} label={ group[0] }>

                                            {group[1] && Object.entries(group[1]).map((category,k) => (

                                                <div key={k} className={'BudgetedStyle'}>

                                                    <TreeItem nodeId={ i++ } label={ category[0] }>

                                                        {category[1] && Object.entries(category[1]).map((subCategory,i) => (

                                                            <div key={i} className={'BudgetedSubStyle'}>
                                                                <TreeItem nodeId={ i++ } label={ subCategory[0] }/>
                                                            </div>

                                                        ))}

                                                    </TreeItem>

                                                </div>

                                            ))}

                                        </TreeItem>

                                    </div>
                                ))}

                            </TreeItem>
                        </div>
                    </TreeView>
                ))}
            </div>
        );
    }
}

export default TreeGroupList;