### How The React App Is Organised
Instead sorting components into 'Containers' connected to redux and 'Components' that are not, this project sort files by the 'size' of the component.
The process of making these files is as follows.

1. First do not think about reusability, just create the component in one chunk inside /views directory
2. After that separate all styled components into style.js
3. During this process if there was any component that can be generalised to a more reusable form, move to /components directory and create a component

This approach might not be best when it comes to code size or DRY. However thinking about 'reusability' too early on will tangle the code base.

### Directory Structure
```sh
client/
├── nginx # nginx config for production
├── public 
│   ├── favicon
│   └── img
└── src
    ├── actions # Redux actions 
    ├── components # Resusable Components 
    ├── const
    ├── reducers # Redux reducers
    ├── utils 
    └── views # Components and containers
```