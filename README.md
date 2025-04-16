# react-native-component-store

My Custom React Native UI Library. A powerful React Native UI library with ready-to-use, highly customizable components. Instead of building components from scratch, use our pre-built UI elements designed for seamless integration into your React Native application.

## ✨ Features

✅ Reusable Components – Common UI elements like 
Buttons, 
Text, 
Images (FastImage support), 
Toasts, 
Dividers, 
and Headers.

✅ Optimized Performance – Built with best practices for smooth and efficient rendering.
✅ Highly Customizable – Easily modify styles and behaviors to match your app's design.
✅ Developer-Friendly – Simple and flexible API to save development time. 

Components IncludedButton – Stylish and responsive buttons with multiple variants.Text – Custom text components with typography presets.FastImage – High-performance image loading with caching support.Toasts – Built-in toast notifications for quick alerts.Divider – Lightweight dividers for structuring layouts.Header – Pre-styled app headers with optional back button and title. And More...

## Installation

```sh
npm install react-native-component-store
```

## Initialize
App.tsx or entry file of your project


```js
import React from 'react';
import {setLibraryConfig} from 'react-native-component-store';

// provide key of your app for fetching component accordingly
  React.useEffect(() => {
    setLibraryConfig({app: 'your-app-key'});
  }, []);

```

## Usage


```js
import { Components } from 'react-native-component-store';

// Use components like this
<Components.Text>Hi, thanks for using React Native Component Store</Components.Text>
<Components.Button title="Submit" />
<Components.Divider />
<Components.Image source={{uri: "uri/path to your assets"}} />

//...

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
