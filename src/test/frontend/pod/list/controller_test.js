// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {PodListController} from 'pod/list/controller';
import podModule from 'pod/module';

describe('Pod list controller', () => {
  /** @type {!PodListController} */
  let ctrl;

  beforeEach(() => {
    angular.mock.module(podModule.name);

    angular.mock.inject(($controller) => {
      ctrl = $controller(PodListController, {podList: {pods: []}});
    });
  });

  it('should initialize pod list', angular.mock.inject(($controller) => {
    let data = {pods: {}};
    /** @type {!PodListController} */
    let ctrl = $controller(PodListController, {podList: data});

    expect(ctrl.podList).toBe(data);
  }));

  it('should show zero state', () => {
    expect(ctrl.shouldShowZeroState()).toBeTruthy();
  });

  it('should hide zero state', () => {
    // given
    ctrl.podList = {pods: ['mock']};

    // then
    expect(ctrl.shouldShowZeroState()).toBeFalsy();
  });
});
