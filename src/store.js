import {writable, get} from "svelte/store";

export let postFileList = writable([]);
export let loading;

const postFileReads= import.meta.glob('../public/**/**.md');

Object.keys(postFileReads).forEach( filePath => {
    import(filePath).then( post => postFileList.update( $postFileList => [ ...$postFileList, post] ) );
})