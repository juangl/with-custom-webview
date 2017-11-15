import React from "react"
import PropTypes from "prop-types"
import { WebView } from "react-native"

const CustomWebView = ({ webViewRef, ...rest }) => (
	<WebView ref={webViewRef} {...rest} />
)

CustomWebView.propTypes = {
	webViewRef: PropTypes.func,
}

CustomWebView.defaultProps = {
	webViewRef: () => {},
}

export default CustomWebView
