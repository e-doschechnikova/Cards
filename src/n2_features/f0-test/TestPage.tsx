import React, {useState} from 'react';
import s from './TestPage.module.scss';
import SuperInputText from "../../n1_main/m1_ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../n1_main/m1_ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../n1_main/m1_ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../n1_main/m1_ui/common/c5-SuperSelect/SuperSelect";
import SuperEditableSpan from "../../n1_main/m1_ui/common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperRadio from "../../n1_main/m1_ui/common/c6-SuperRadio/SuperRadio";

export const TestPage = () => {

    const [inputText, setInputText] = useState<string>('')
    const error = inputText ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('type something...')
        } else {
            alert(inputText)
        }
    }

    const [checkboxStatus, setCheckboxStatus] = useState<boolean>(false)
    const [spanValue, setSpanValue] = useState<string>('')

    const arr = ['1', '12', '123', '1234', '12345']
    const [value, onChangeOption] = useState(arr[2])

    return (
        <div className={s.column}>
            <SuperInputText
                value={inputText}
                onChangeText={setInputText}
                onEnter={showAlert}
                error={error}/>
            <div className={s.row}>
                <SuperButton onClick={showAlert}>
                    default
                </SuperButton>

                <SuperButton red>
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>
            </div>
            <SuperCheckbox
                checked={checkboxStatus}
                onChangeChecked={setCheckboxStatus}>
                some text
            </SuperCheckbox>
            <SuperEditableSpan
                value={spanValue}
                onChangeText={setSpanValue}
                spanProps={{children: spanValue ? undefined : 'enter text...'}}
            />
            <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
            <div className={s.row}><SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
            </div>
        </div>
    );
};