/**
 * Tweek
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class KeyUpdateModel {
    'implementation': any;
    'manifest': any;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "implementation",
            "baseName": "implementation",
            "type": "any"
        },
        {
            "name": "manifest",
            "baseName": "manifest",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return KeyUpdateModel.attributeTypeMap;
    }
}

