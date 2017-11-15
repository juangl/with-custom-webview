import React, { Component } from "react"
import PropTypes from "prop-types"
import { WebView, requireNativeComponent, NativeModules } from "react-native"

const { CustomWebViewManager } = NativeModules
let RCTCustomWebView

class CustomWebView extends Component {
	static propTypes = {
		keyboardDisplayRequiresUserAction: PropTypes.bool.isRequired,
		webViewRef: PropTypes.func,
		...WebView.propTypes,
	}

	static defaultProps = {
		keyboardDisplayRequiresUserAction: false,
		webViewRef: () => {},
	}

	render() {
		const { webViewRef, keyboardDisplayRequiresUserAction, ...rest } = this.props

		return (
			<WebView
				{...rest}
				ref={webViewRef}
				nativeConfig={{
					component: RCTCustomWebView,
					viewManager: CustomWebViewManager,
					props: {
						keyboardDisplayRequiresUserAction,
					},
				}}
			/>
		)
	}
}

RCTCustomWebView = requireNativeComponent(
	"RCTCustomWebView",
	CustomWebView,
	WebView.extraNativeComponentConfig,
)

export default CustomWebView
