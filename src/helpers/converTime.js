function converTime({time}) {
    return new Date(time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default converTime