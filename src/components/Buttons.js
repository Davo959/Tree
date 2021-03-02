//Buttons component for 9 position

import React from "react";

export const ButtonsComponent = ({ }) => {
    return (
            <div className={'ButtonsStyle'} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <button >Department</button>/
                    <button >Group</button>/
                    <button >Category</button>/
                    <button >Sub-Category</button>
                </div>
            </div>
    )
}