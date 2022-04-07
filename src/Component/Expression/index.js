import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {Form, Row, Col, Dropdown, Button, Menu, Tooltip} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { INSERT_OPERATOR_MENU, INSERT_FUNCTION_MENU, getBrowserType } from './../../config'

const { SubMenu } = Menu

const NewMenu = styled(Menu)`
  .ant-dropdown-menu-item {
    padding: 0 !important;
  }
  button[ant-click-animating-without-extra-node]:after {
    border: 0 none;
    opacity: 0;
    animation: none 0 ease 0 1 normal;
  }
`
const COMMON_STYLE = {
  minHeight: 130,
  width: 740,
  border: '1px solid #d9d9d9',
  outline: 'none',
  borderRadius: '3px',
  padding: '4px 11px'
}

const Expression = ({
  value = '',
  insertFields = [], // 插入字段
  insertOperatorFields = INSERT_OPERATOR_MENU, // 插入运算符
  insertFunctionFields = INSERT_FUNCTION_MENU, // 插入函数
  onChange
}) => {
  const editRef = useRef(null)

  useEffect(()=>{
    const browserType = getBrowserType()
    if (browserType === 'QQ' || browserType === 'Firefox') {
      editRef.current.innerHtml = _getQQShowExpression(value || '')
    }else{
      editRef.current.innerHtml = _getShowExpression(value || '')
    }
  }, [JSON.stringify(value)]) // eslint-disable-line

  const _getShowExpression = (str) => {
    if(!str) return ''
    return str.replace(/[\u4e00-\u9fa5]{1, 20}/gi, function($1){
      return _handleReplaceField($1)
    })
  }

  const _getQQShowExpression = (str) => {
    if(!str) return ''
    return str.replace(/[\u4e00-\u9fa5]{1,20}/gi, function($1){
      return `<input value="${$1}" disabled="true"  style="background: rgb(2, 143, 224); border: none; border-radius: 2px; color: rgb(255, 255, 255); height: 22px; width: 53px;" />`
    })
  }

  const FIELD_MENU = (
    <NewMenu>
      {insertFields &&
        insertFields.length > 0 &&
        insertFields.map((item) => {
          return (
            <Menu.Item key={item.value} data={item}>
              <Button
                style={{ border: 'none', width: '100%' }}
                onClick={() => _handleInsertAtCursor(item.name, 'Field')}
              >
                {item.name}
              </Button>
            </Menu.Item>
          )
        })}
    </NewMenu>
  )
  const OPERATOR_MENU = (
    <NewMenu>
      {insertOperatorFields?.length > 0 &&
        insertOperatorFields.map((attr) => {
          return (
            <Menu.Item key={attr.key}>
              <Button
                style={{ border: 'none', width: 150 }}
                onClick={() => _handleInsertAtCursor(attr.key, '')}
              >
                <Row>
                  <Col flex="50px">{attr.key}</Col>
                  <Col flex="auto">{attr.label}</Col>
                </Row>
              </Button>
            </Menu.Item>
          )
        })}
    </NewMenu>
  )

  const FUNC_MENU = (
    <NewMenu>
      {insertFunctionFields?.length > 0 &&
        insertFunctionFields.map((item) => {
          return (
            <SubMenu title={item.title} key={item.title}>
              {item.data.map((attr) => {
                return (
                  <Menu.Item key={attr.key}>
                    <Tooltip title={attr.title} placement="right">
                      <Button
                        style={{ border: 'none', width: '100%' }}
                        onClick={() => _handleInsertAtCursor(attr.expression, '')}
                      >
                        {attr.key}
                      </Button>
                    </Tooltip>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          )
        })}
    </NewMenu>
  )

  const _handleInsertAtCursor = (info, type) => {
    let sel, range
    if (window.getSelection) {
      sel = window.getSelection()
      if (sel.getRangeAt && sel.rangeCount && (sel.focusNode.id === 'editInputArea' || sel.focusNode.parentNode.id === 'editInputArea')) {
        range = sel.getRangeAt(0)
        range.deleteContents()
        let browserType = getBrowserType()
        if ((browserType === 'QQ' || browserType === 'Firefox') && type === 'Field') {
          const inputEl = document.createElement('input')
          inputEl.setAttribute('value', info)
          inputEl.setAttribute('disabled', 'true')
          inputEl.style.background = '#028FE0'
          inputEl.style.border = 'none'
          inputEl.style.borderRadius = '2px'
          inputEl.style.color = '#FFFFFF'
          inputEl.style.height = '22px'
          inputEl.style.width = _handleInputResize(info) + 1 + 'px'
          range.insertNode(inputEl)
          if (browserType === 'QQ') {
            let el = document.getElementById('editInputArea')
            el.focus();
          }
          range.collapse(false)
          sel.removeAllRanges()
          sel.addRange(range)
        } else {
          if (type === 'Field') {
            info = _handleReplaceField(info)
          }
          let el = document.createElement('span')
          el.innerHTML = info
          let flag = document.createDocumentFragment(),
              lastNode
          if (el.firstChild) {
            lastNode = flag.appendChild(el.firstChild)
          }
          range.insertNode(flag)
          if (lastNode) {
            range = range.cloneRange()
            range.setStartAfter(lastNode)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
          } 
          let str = _handleReturnText()
          if (onChange) onChange(str, _getExpression(str))
        }
      }
    }else if(document.selection && document.selection.type !== 'control') {// IE < 9
      document.selection.createRange().pasteHTML(info)
    }
  }

  const _handleInputResize = (str) => {
    let el = document.createElement('a')
    el.innerText = str
    let body = document.getElementsByTagName('body')[0]
    body.appendChild(el)
    let width = el.offsetWidth
    body.removeChild(el)
    return width
  }

  const _handleReplaceField = (text) => 
        `<span contentEditable="false" style="background: #028FE0; width: auto; height: 22px; color: #FFFFFF; border-radius: 2px;">${text}</span>`

  const _handleReturnText = () => {
    let str = ''
    if (editRef?.current) {
      let myBrowserType = getBrowserType()
      if (myBrowserType === 'QQ' || myBrowserType === 'Firefox') {
        let node = document.getElementById('editInputArea').childNodes;
        if (node && node.length) {
          Array.form(node).forEach(item=>{
            if (item.data) {
              str += item.data
            }else if (item?.tagName?.toLocaleLowerCase && item.tagName.toLocaleLowerCase() === 'input') {
              str += item.value
            }
          })
        }
      }else{
        str = editRef.current.innerText
      }
    }
    return str
  }

  const _getExpression = (str) => {
    if(!str) return ''
    return str.replace(/[a-zA-Z.\u4e00-\u9fa5]{1,20}/gi, function($1){
      const field = insertFields.find(item=> item.name === $1)
      if (field) {
        return `{${field.code}}`
      }
      return $1
    })
  }

  return (
    <div>
      <Form.Item>
        <div
          ref={editRef}
          suppressContentEditableWarning
          id="editInputArea"
          contentEditable
          style={COMMON_STYLE}
          onInput={(e)=>{
            let str = _handleReturnText()
            onChange && onChange(str, _getExpression(str))
          }}
        >
        </div>
      </Form.Item>
      <Row className="m-t-2" style={{ width: '740px' }}>
        <Col>
          <Dropdown overlay={FIELD_MENU} placement="bottomLeft">
            <Button type="link" icon={<PlusOutlined />} style={{ paddingLeft: 0 }}>
              插入字段
            </Button>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown overlay={OPERATOR_MENU} placement="bottomLeft">
            <Button type="link" icon={<PlusOutlined />}>
              插入运算
            </Button>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown overlay={FUNC_MENU} placement="bottomLeft">
            <Button type="link" icon={<PlusOutlined />}>
              插入函数
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  )
}

export default Expression