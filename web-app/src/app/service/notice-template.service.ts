/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../pojo/Message';
import { NoticeTemplate } from '../pojo/NoticeTemplate';
import { Page } from '../pojo/Page';

const notice_template_uri = '/notice/template';
const notice_templates_uri = '/notice/templates';
const notice_templates_all_uri = '/notice/templates/all';
const default_notice_templates_uri = '/notice/default_templates';
@Injectable({
  providedIn: 'root'
})
export class NoticeTemplateService {
  constructor(private http: HttpClient) {}

  public newNoticeTemplate(body: NoticeTemplate): Observable<Message<any>> {
    return this.http.post<Message<any>>(notice_template_uri, body);
  }

  public editNoticeTemplate(body: NoticeTemplate): Observable<Message<any>> {
    return this.http.put<Message<any>>(notice_template_uri, body);
  }

  public deleteNoticeTemplate(templateId: number): Observable<Message<any>> {
    return this.http.delete<Message<any>>(`${notice_template_uri}/${templateId}`);
  }

  public getNoticeTemplates(name: string, preset: boolean, pageIndex: number, pageSize: number): Observable<Message<Page<NoticeTemplate>>> {
    pageIndex = pageIndex ? pageIndex : 0;
    pageSize = pageSize ? pageSize : 8;
    let httpParams = new HttpParams();
    httpParams = httpParams.append('pageIndex', pageIndex);
    httpParams = httpParams.append('pageSize', pageSize);
    httpParams = httpParams.append('preset', preset);
    if (name != undefined && name != null && name != '') {
      httpParams = httpParams.append('name', name);
    }
    const options = { params: httpParams };
    return this.http.get<Message<Page<NoticeTemplate>>>(notice_templates_uri, options);
  }

  public getAllNoticeTemplates(): Observable<Message<NoticeTemplate[]>> {
    return this.http.get<Message<NoticeTemplate[]>>(notice_templates_all_uri);
  }

  public getDefaultNoticeTemplates(): Observable<Message<NoticeTemplate[]>> {
    return this.http.get<Message<NoticeTemplate[]>>(default_notice_templates_uri);
  }

  public getNoticeTemplateById(templateId: number): Observable<Message<NoticeTemplate>> {
    return this.http.get<Message<NoticeTemplate>>(`${notice_template_uri}/${templateId}`);
  }
}
