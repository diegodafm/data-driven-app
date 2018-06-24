export const components = [];
export const componentMap = (data) => (target) => {
    const {component} = data;
    components.push({
        [component]: target
    });
    return target.prototype.data = data, target;
};
export const getComponent = (componentName) => {
    const component = components.find(mappedComponent => mappedComponent[componentName] !== undefined);
    if(component[componentName]) return component[componentName];
}
