/* 
 * Tweek
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing KeysApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class KeysApiTests
    {
        private KeysApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new KeysApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of KeysApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' KeysApi
            //Assert.IsInstanceOfType(typeof(KeysApi), instance, "instance is a KeysApi");
        }

        
        /// <summary>
        /// Test CreateKey
        /// </summary>
        [Test]
        public void CreateKeyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string keyPath = null;
            //string authorName = null;
            //string authorEmail = null;
            //KeyUpdateModel newKeyModel = null;
            //var response = instance.CreateKey(keyPath, authorName, authorEmail, newKeyModel);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test KeysDeleteKey
        /// </summary>
        [Test]
        public void KeysDeleteKeyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string keyPath = null;
            //string authorName = null;
            //string authorEmail = null;
            //List<string> additionalKeys = null;
            //var response = instance.KeysDeleteKey(keyPath, authorName, authorEmail, additionalKeys);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test KeysGetKey
        /// </summary>
        [Test]
        public void KeysGetKeyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string keyPath = null;
            //string revision = null;
            //var response = instance.KeysGetKey(keyPath, revision);
            //Assert.IsInstanceOf<Object> (response, "response is Object");
        }
        
    }

}
